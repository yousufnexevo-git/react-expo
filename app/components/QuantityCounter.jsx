import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';

export default function QuantityCounter({ price }) {
  const [quantity, setQuantity] = useState(1);
  const [showQty, setShowQty] = useState(false);

  const totalPrice = price * quantity;

  return (
    <View style={styles.container}>

      {!showQty ? (
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => setShowQty(true)}
        >
          <Text style={styles.title}>Add</Text>
        </TouchableOpacity>
      ) : (
        <View style={styles.qtyContainer}>
          
          <TouchableOpacity
            style={styles.qtyBtn}
            onPress={() => {
              if (quantity > 1) {
                setQuantity(quantity - 1);
              }
            }}
          >
            <Ionicons name="remove" size={20} color="#FFA451" />
          </TouchableOpacity>

          <Text style={styles.qtyText}>{quantity}</Text>

          <TouchableOpacity
            style={styles.qtyBtn}
            onPress={() => {
              if (quantity < 9) {
                setQuantity(quantity + 1);
              }
            }}
          >
            <Ionicons name="add" size={20} color="#FFA451" />
          </TouchableOpacity>

        </View>
      )}

      <Text style={styles.total}>Total: ₹{totalPrice}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },

  title: {
    fontSize: 18,
    color: '#fff',
    fontWeight: '500',
  },

  qtyContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#daa520',
    borderRadius: 25,
    paddingHorizontal: 7,
    paddingVertical: 5,
    marginTop: 70,
    width: '40%',
  },

  qtyBtn: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  qtyText: {
    fontSize: 18,
    fontWeight: '600',
    marginHorizontal: 22,
  },

  total: {
    fontSize: 18,
    fontWeight: '700',
    marginVertical: 10,
    top: -100,
    marginLeft: '60%',
  },

  addButton: {
    backgroundColor: '#cd5c5c',
    width: '40%',
    borderRadius: 10,
    alignItems: 'center',
    padding: 7,
    marginTop: 70,
  },
});
