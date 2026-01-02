import { View, Text, StyleSheet, Image, ScrollView} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { TouchableOpacity } from 'react-native';
import QuantityCounter from '../components/QuantityCounter';

export default function DishOne() {
  return (
    <ScrollView>
        <View style={styles.container}>
            <View>
                  <View style={styles.originalView}>
                              <View style={styles.card}>
                       
                                     <TouchableOpacity onPress={() => router.back()} style={styles.backArrow}>
                                       <Ionicons name="arrow-back" size={20} color="#fff" />
                                     </TouchableOpacity>
                                     <Image source={require('./images/mango-berry-salad.jpg')} style={styles.finalImage} />
                              </View>
                <View style={styles.priceDesc}>
                          <Text style={{ fontSize: 18, fontWeight: '600' }}>Tropical Fruit Salad</Text>
                          <Text style={{ fontSize: 18, fontWeight: '600' }}>Price ₹ 209</Text>
                </View>
                  <Text style={styles.description}>Tropical fruit salad blends mango, pineapple, papaya, banana, and citrus into a vibrant, juicy mix. Sweet, refreshing, and colorful, it delivers island-inspired flavors, light textures, and natural energy, making it perfect for summer meals, healthy desserts, or festive gatherings.</Text>
                  </View>
        </View>
        <View>
                  <View style={styles.bottomContent}><QuantityCounter price={209} /></View>
                  <TouchableOpacity style={styles.button} onPress={() => router.push('/redirectPage')}><Text style={styles.buttonText}>Place Order</Text>
          </TouchableOpacity>
           <View style={styles.extraContent}>
                  <Text style={styles.extraTitle}>Why you’ll love this combo</Text>
          
                  <Text style={styles.extraText}>
                    • Bright tropical aroma and flavor
                  </Text>
                  <Text style={styles.extraText}>
                    • Naturally sweet and refreshing
                  </Text>
                  <Text style={styles.extraText}>
                    • Often blended without added sugar
                  </Text>
                  <Text style={styles.extraText}>
                    • Hydrating and energizing, best served
                  </Text>
          
                  <Text style={styles.extraTitle}>Ingredients</Text>
                  <Text style={styles.extraText}>
                    Mango, Papaya, Banana, Orange, Pineapple, Organic honey, Lime juice
                  </Text>
          
                  <Text style={styles.extraTitle}>Nutritional Info</Text>
                  <Text style={styles.extraText}>
                    Calories: 90–130 kcal
                  </Text>
                  <Text style={styles.extraText}>
                    Potassium: Moderate
                  </Text>
                  <Text style={styles.extraText}>
                    Vitamin C: 60–80% DV
                  </Text>
                  <Text style={styles.extraText}>
                    Tip: Adding lime helps balance sweetness naturally
                  </Text>
                  <Text style={styles.extraText}>
                    Sugar source: Natural fruit sugars
                  </Text>
                </View>
                  </View>
          
                <View>
                  <Text style={styles.extraTitle}>Customer Reviews :
                  </Text>
                  <Text style={{fontSize: 17,alignSelf: 'center', color: '#555'}}>⭐️⭐️⭐️⭐️⭐️ - Very refreshing!</Text>
                  <Text style={{fontSize: 17,alignSelf: 'center', color: '#555'}}>⭐️⭐️⭐️⭐️ - Perfect summer</Text>
                  <Text style={{fontSize: 17,alignSelf: 'center', marginBottom: 30, color: '#555'}}>⭐️⭐️⭐️ - Loved the taste</Text>
                </View>
          
        </View>
      </ScrollView>
      );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: '#f0fff0',
    marginTop: 35,
  },
  text: {
    fontSize: 24,
    marginTop: 30,
  },
  finalImage: {
    width: 370,
    height: 280,
    left: -30,
  },
  originalView: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 0,
  },
  button: {
    backgroundColor: '#228b22',
    padding: 7,
    borderRadius: 10,
    alignItems: 'center',
    width: '50%',
    alignSelf: 'flex-end',
    top: -84,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '500',
  },
  card: {
    width: '100%',
    alignSelf: 'center',
  },
  description: {
    marginTop: 20,
    fontSize: 16,
    borderRadius: 10,
    color: '#555',
    borderColor: '#f08080',
    borderWidth: 2,
    padding: 15,
    letterSpacing: 1,
    textAlign: 'justify',
    fontWeight: '400',
  },
  priceDesc: {
    display: 'flex',
    flexDirection: 'row',
    gap: 60,
    backgroundColor: '#ffe4c4',
    height: 70,
    width: '120%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomContent: {
    flexDirection: 'row',
    marginTop: 10,
  },
  backArrow: {
    padding: 3,
    borderRadius: 10,
    backgroundColor: '#696969',
    width: '8%', 
  },
  backArrow: {
    position: 'absolute',
    top: 20,
    zIndex: 1, 
    backgroundColor: '#696969',
    padding: 5,
    borderRadius: 10,
  },
   extraContent: {
    marginTop: 0,
    paddingBottom: 20,
  },
  extraTitle: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 10,
    color: '#2f4f4f',
  },
  extraText: {
    fontSize: 16,
    marginBottom: 8,
    color: '#555',
  },
});
