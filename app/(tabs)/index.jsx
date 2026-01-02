import { View, Text, StyleSheet, Image, TextInput, ScrollView, StatusBar, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="#ff8c42" 
      />

      <ScrollView style={styles.container}>

        <View style={styles.header}>
          <Image source={require('./images/group.png')} style={{ width: 18, height: 10 }} />

          <View style={{ alignItems: 'center' }}>
            <Image source={require('./images/basket.png')} style={{ width: 18, height: 20 }} />
            <Text style={{ fontSize: 12 }}>My basket</Text>
          </View>
        </View>

        <Text style={styles.blue}>
          Hello Kante, <Text style={{ fontWeight: 'bold' }}>
            What fruit salad combo do you want today?
          </Text>
        </Text>

        <View style={styles.searchBox}>
          <Ionicons name="search-outline" size={18} color="#999" />
          <TextInput
            placeholder="Search for fruit salad combos"   placeholderTextColor="gray"
            style={styles.input}
          />
          <Ionicons name="options-outline" size={18} />
        </View>

        <Text style={styles.section}>Recommended Combo</Text>

        <View style={styles.row}>
          <TouchableOpacity style={styles.card} onPress={() => router.push('/dish-one')}>
            <View style={styles.upContent}>
              <Ionicons name="heart-outline" size={24} color="#FFA451" />
              <Ionicons name="add-circle" size={24} color="#FFA451" />
            </View>
            <Image source={require('./images/food-item-four.png')} style={styles.image} />
            <Text style={styles.cardTitle}>Honey lime combo</Text>
            <Text style={styles.price}>₹ 199</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.card} onPress={() => router.push('/dish-two')}>
            <View style={styles.upContent}>
              <Ionicons name="heart-outline" size={24} color="#FFA451" />
              <Ionicons name="add-circle" size={24} color="#FFA451" />
            </View>
            <Image source={require('./images/food-item-three.png')} style={styles.image} />
            <Text style={styles.cardTitle}>Berry mango combo</Text>
            <Text style={styles.price}>₹ 279</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.tabs}>
          <Text style={styles.tab}>Hottest</Text>
          <Text style={styles.activeTab}>Popular</Text>
          <Text style={styles.activeTab}>New combo</Text>
          <Text style={styles.activeTab}>Top</Text>
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity style={styles.cardBelow} onPress={() => router.push('/dish-three')}>
              <View style={styles.upContent}>
                <Ionicons name="heart-outline" size={24} color="#FFA451" />
                <Ionicons name="add-circle" size={24} color="#FFA451" />
              </View>
              <Image source={require('./images/food-item-two.png')} style={styles.image} />
              <Text style={styles.cardTitle}>Quinoa fruit salad</Text>
              <Text style={styles.price}>₹ 259</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.cardBelow} onPress={() => router.push('/dish-four')}>
              <View style={styles.upContent}>
                <Ionicons name="heart-outline" size={24} color="#FFA451" />
                <Ionicons name="add-circle" size={24} color="#FFA451" />
              </View>
              <Image source={require('./images/food-item-one.png')} style={styles.image} />
              <Text style={styles.cardTitle}>Tropical fruit salad</Text>
              <Text style={styles.price}>₹ 209</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.cardBelow} onPress={() => router.push('/dish-two')}>
              <View style={styles.upContent}>
                <Ionicons name="heart-outline" size={24} color="#FFA451" />
                <Ionicons name="add-circle" size={24} color="#FFA451" />
              </View>
              <Image source={require('./images/food-item-three.png')} style={styles.image} />
              <Text style={styles.cardTitle}>Berry mango combo</Text>
              <Text style={styles.price}>₹ 279</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.cardBelow} onPress={() => router.push('/dish-one')}>
              <View style={styles.upContent}>
                <Ionicons name="heart-outline" size={24} color="#FFA451" />
                <Ionicons name="add-circle" size={24} color="#FFA451" />
              </View>
              <Image source={require('./images/food-item-four.png')} style={styles.image} />
              <Text style={styles.cardTitle}>Honey lime combo</Text>
              <Text style={styles.price}>₹ 199</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>

      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 10,
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  blue: {
    fontSize: 18,
    marginVertical: 20,
    color: '#2D2A6E',
  },
  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F3F4F8',
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
  },
  input: {
    flex: 1,
    marginHorizontal: 10,
  },
  section: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#27214D',
    marginBottom: 15,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  card: {
    width: '48%',
    backgroundColor: '#ffe4e1',
    borderRadius: 15,
    padding: 10,
    marginBottom: 20,
    elevation: 6,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
    marginLeft: 15,
  },
  cardTitle: {
    fontSize: 14,
    fontWeight: '600',
  },
  price: {
    color: '#FF8C42',
    fontWeight: 'bold',
    marginTop: 5,
  },
  tabs: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  tab: {
    marginRight: 20,
    fontSize: 17,
    color: '#27214D',
    fontWeight: 'bold',
  },
  activeTab: {
    marginRight: 20,
    color: '#FF8C42',
    fontWeight: 'bold',
  },
  upContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardBelow: {
    width: 160,
    backgroundColor: '#FFFAEB',
    borderRadius: 15,
    marginBottom: 200,
    marginRight: 10,
    padding: 10,
    elevation: 4,
  },
});
