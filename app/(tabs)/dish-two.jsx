import { View, Text, StyleSheet, Image, ScrollView} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { TouchableOpacity } from 'react-native';
import QuantityCounter from '../components/QuantityCounter';

export default function DishOne() {
  return (
    <ScrollView>
        <View style={styles.container}>
          <TouchableOpacity onPress={() => router.back()}>
                  <Ionicons name="arrow-back" size={20} style={[styles.backArrow,{ marginTop: 10}]} color="#fff" />
        </TouchableOpacity>
    
            <View>
                  <View style={styles.originalView}>
                  <View style={styles.card}>
            
                          <TouchableOpacity onPress={() => router.back()} style={styles.backArrow}>
                            <Ionicons name="arrow-back" size={20} color="#fff" />
                          </TouchableOpacity>
                          <Image source={require('./images/mango-berry-salad.jpg')} style={styles.finalImage} />
                  </View>
                <View style={styles.priceDesc}>
                          <Text style={{ fontSize: 18, fontWeight: '600' }}>Berry Mango Combo</Text>
                          <Text style={{ fontSize: 18, fontWeight: '600' }}>Price ₹ 279</Text>
                </View>
                  <Text style={styles.description}>Berry mango salad blends sweet mangoes with juicy strawberries, blueberries, and raspberries, creating a colorful mix of flavors and textures. Light, refreshing, and vibrant, it’s perfect for summer meals, healthy snacking, or brightening gatherings with natural sweetness.</Text>
          </View>
        </View>
      <View>
                  <View style={styles.bottomContent}><QuantityCounter price={279} /></View>
                  <TouchableOpacity style={styles.button} onPress={() => router.push('/redirectPage')}><Text style={styles.buttonText}>Place Order</Text>
                                        </TouchableOpacity>
        </View>
           
               <View style={styles.extraContent}>
                <Text style={styles.extraTitle}>Why you’ll love this combo</Text>
        
                <Text style={styles.extraText}>
                  • Naturally sweet with a refreshing tropical taste
                </Text>
                <Text style={styles.extraText}>
                  • Boosts hydration and energy
                </Text>
                <Text style={styles.extraText}>
                  • Naturally sweet with a refreshing tropical taste
                </Text>
        
                <Text style={styles.extraTitle}>Ingredients</Text>
                <Text style={styles.extraText}>
                  Ripe mangoes, Strawberries, Blueberries, Raspberries, Fresh mint
                </Text>
        
                <Text style={styles.extraTitle}>Nutritional Info</Text>
                <Text style={styles.extraText}>
                  Calories: 90–120 kcal
                </Text>
                <Text style={styles.extraText}>
                  Sugar: Natural fruit sugars (fructose)
                </Text>
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
  finalImage: {
    width: 370,
    height: 280,
    left: -30,
  },
  originalView: {
    alignItems: 'center',
    justifyContent: 'center',
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
    fontSize: 16,
    marginTop: 20,
    padding: 15,
    color: '#555',
    borderRadius: 10,
    letterSpacing: 1,
    fontWeight: '400',
    textAlign: 'justify',
    borderColor: '#f08080',
    borderWidth: 2,
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
