import React, { useEffect, useState } from "react";
import {
  View,
  Image,
  FlatList,
  Modal,
  Text,
  TouchableOpacity,
} from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import AsyncStorage from "@react-native-async-storage/async-storage";
// import Modal from "../components/Home/Modal";

const DATA = [
  {
    image: require("../src/images/gallery1.jpg"),
    id: 1,
  },
  {
    image: require("../src/images/gallery2.jpg"),
    id: 2,
  },
  {
    image: require("../src/images/gallery3.jpg"),
    id: 3,
  },
  {
    image: require("../src/images/gallery4.jpg"),
    id: 4,
  },
  {
    image: require("../src/images/gallery5.jpg"),
    id: 5,
  },
  {
    image: require("../src/images/gallery6.jpg"),
    id: 6,
  },
  {
    image: require("../src/images/gallery7.jpg"),
    id: 7,
  },
  {
    image: require("../src/images/gallery8.jpg"),
    id: 8,
  },
];

const Photo = ({ image }) => (
  <View style={{ flex: 1, padding: 7 }}>
    <Image source={image} style={{ width: 170, height: 200 }} />
  </View>
);

const numColumns = 2;

const Home = ({navigation}) => {
  const [userDetails, setUserDetails] = useState();
  // Modal
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState({});

  const selectItem = (value) => {
    setSelectedItem(value);
    setModalOpen(true);
  }

  useEffect(() => {
    //calling data
    getUserData();
  }, []);

  const getUserData = async () => {
    let data = await AsyncStorage.getItem("userData");
    if (data) {
      setUserDetails(JSON.parse(data));
      console.log("Data", userDetails);
    }
  };

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => selectItem(item)}>
        <Photo image={item.image} />
      </TouchableOpacity>
    );
  };

  return (
    <View style={{ flex: 1, marginBottom: 5, }}>
      <Modal visible={modalOpen} animationType="slide" transparent={true} >
        <View style={{flex: 1, padding: 30, backgroundColor: 'rgba(51, 51, 51, 0.8)'}} >
          <AntDesign name="close" size={24} color="white" onPress={() => setModalOpen(false)} style={{alignSelf: 'flex-end', marginBottom: 30}}/>
          <Image source={selectedItem.image} style={{width: '100%', height: '80%'}} />
          <View style={{flex: 1, alignItems: 'center', marginTop: 30}}>
            <TouchableOpacity style={{flexDirection: 'row', display: 'flex'}} onPress={() => navigation.navigate('Details')}>
              <Text style={{textTransform: 'uppercase', fontWeight: '400', letterSpacing: 1, color: '#fff', fontSize: 14, marginRight: 10}}>See Details</Text>
              <Feather name="arrow-right" size={24} color="white" />
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <FlatList
        keyExtractor={(item) => item.id}
        data={DATA}
        renderItem={renderItem}
        numColumns={numColumns}
        disableVirtualization
      />
    </View>
  );
};

export default Home;
