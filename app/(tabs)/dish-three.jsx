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
                                     <Image source={require('./images/quina-salad.jpg')} style={styles.finalImage} />
                            </View>
                <View style={styles.priceDesc}>
                          <Text style={{ fontSize: 18, fontWeight: '600' }}>Quinoa Fruit Salad</Text>
                          <Text style={{ fontSize: 18, fontWeight: '600' }}>Price ₹ 259</Text>
                </View>
                  <Text style={styles.description}>Quina fruit salad showcases tart quina balanced with sweet fruits, creating a unique, refreshing blend. Bright flavors, gentle bitterness, and natural sweetness combine beautifully, offering a nourishing, aromatic dish that feels adventurous, revitalizing, traditional tropical tastes worldwide heritage.</Text>
                  </View>
        </View>
        <View>
                  <View style={styles.bottomContent}><QuantityCounter price={259} /></View>
                  <TouchableOpacity style={styles.button} onPress={() => router.push('/redirectPage')}><Text style={styles.buttonText}>Place Order</Text>
          </TouchableOpacity>
          <View style={styles.extraContent}>
                  <Text style={styles.extraTitle}>Why you’ll love this combo</Text>
          
                  <Text style={styles.extraText}>
                    • Refreshing, aromatic, and best served chilled
                  </Text>
                  <Text style={styles.extraText}>
                    • Often blended with sweeter fruits or citrus to balance taste
                  </Text>
                  <Text style={styles.extraText}>
                    • Traditionally used for digestive and refreshing benefits
                  </Text>
          
                  <Text style={styles.extraTitle}>Ingredients</Text>
                  <Text style={styles.extraText}>
                    Quina fruit, Banana, Orange, Organic honey
                  </Text>
          
                  <Text style={styles.extraTitle}>Nutritional Info</Text>
                  <Text style={styles.extraText}>
                    Calories: 70–100 kcal
                  </Text>
                  <Text style={styles.extraText}>
                    Carbohydrates: 16–22 g
                  </Text>
                  
                  <Text style={styles.extraText}>
                    Flavor balance: Slight bitterness offsets sweetness naturally
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
    color: '#555',
    borderRadius: 10,
    padding: 15,
    letterSpacing: 1,
    textAlign: 'justify',
    fontWeight: '400',
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
