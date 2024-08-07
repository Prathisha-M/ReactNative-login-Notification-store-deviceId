import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, ActivityIndicator } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import AntDesign from 'react-native-vector-icons/AntDesign';

const DropdownComponent = ({ onSelectCourse }) => {
  const [value, setValue] = useState(null);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://192.168.29.24:3000/select');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const students = await response.json();
        setData(students);
        console.log('Student-------------',students)
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const renderItem = (item) => {
    return (
      <View style={styles.item}>
        <Text style={styles.textItem}>{item.label}</Text>
        {item.value === value && (
          <AntDesign
            style={styles.icon}
            color="white"
            name="Safety"
            size={20}
          />
        )}
      </View>
    );
  };

  if (loading) {
    return <ActivityIndicator size="large" color="#C23A8A" />;
  }

  return (
    <Dropdown
      style={styles.dropdown}
      placeholderStyle={styles.placeholderStyle}
      selectedTextStyle={styles.selectedTextStyle}
      inputSearchStyle={styles.inputSearchStyle}
      iconStyle={styles.iconStyle}
      data={data}
      search
      maxHeight={300}
      labelField="label"
      valueField="value"
      placeholder="Select item"
      searchPlaceholder="Search..."
      value={value}
      onChange={(item) => {
        setValue(item.value);
        onSelectCourse(item.value); // Update course in RegisterScreen
      }}
      renderLeftIcon={() => (
        <AntDesign style={styles.icon} color="white" name="Safety" size={20} />
      )}
      renderItem={renderItem}
    />
  );
};

export default DropdownComponent;


const styles = StyleSheet.create({
  dropdown: {
    margin: 16,
    marginRight: -2,
    marginLeft: -10,
    height: 50,
    backgroundColor: 'black',
    borderRadius: 12,
    padding: 12,
    shadowColor: 'white',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  icon: {
    marginRight: 5,
    color: 'gray',
  },
  item: {
    padding: 17,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  textItem: {
    flex: 1,
    fontSize: 16,
    color: 'gray',
  },
  placeholderStyle: {
    fontSize: 16,
    color: 'gray',
  },
  selectedTextStyle: {
    fontSize: 16,
    color: 'gray',
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
    color: 'white',
  },
});
