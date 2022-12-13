import {StyleSheet, View, Image, TouchableOpacity, Alert} from 'react-native';

export const add = (a, b) => {
  return a + b;
};
export const __getCompletedIcon = item => {
  if (item == 1) {
    return 'https://img.icons8.com/flat_round/64/000000/checkmark.png';
  } else {
    return 'https://img.icons8.com/flat_round/64/000000/delete-sign.png';
  }
};

export const __getDescriptionStyle = item => {
  if (item == 1) {
    return {
      textDecorationLine: 'line-through',
      fontStyle: 'italic',
      color: '#808080',
    };
  }
};

const state = {
  modalVisible: false,
  userSelected: [],
  product: {
    name: 'Edit Profile Pcture',

    images: [
      'https://bootdey.com/img/Content/avatar/avatar6.png',
      'https://bootdey.com/img/Content/avatar/avatar2.png',
      'https://bootdey.com/img/Content/avatar/avatar3.png',
    ],
    colors: ['#00BFFF', '#FF1493', '#00CED1', '#228B22', '#20B2AA', '#FF4500'],
  },
};

export const __renderImages = () => {
  return (
    <View style={styles.smallImagesContainer}>
      {state.product.images.map((prop, key) => {
        return (
          <TouchableOpacity
            key={key}
            onPress={() => {
              this.__setImageSelected(prop);
            }}>
            <Image style={styles.smallImage} source={{uri: prop}} />
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export const __renderColors = () => {
  return (
    <View style={styles.contentColors}>
      {state.product.colors.map((prop, key) => {
        return (
          <TouchableOpacity
            key={key}
            style={[
              styles.btnColor,
              {backgroundColor: prop},
            ]}></TouchableOpacity>
        );
      })}
    </View>
  );
};

export const clickEventListener = item => {
  Alert.alert('Item selected ');
};
export const onClickListener = viewId => {
  Alert.alert('Alert', 'Button pressed ' + viewId);
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    backgroundColor: '#05445E',
  },
  content: {
    marginLeft: 10,
    marginRight: 10,
    marginTop: 20,
  },
  header: {
    flexDirection: 'row',
  },
  mainImage: {
    width: 200,
    height: 200,
  },
  smallImagesContainer: {
    flexDirection: 'column',
    marginLeft: 30,
  },
  smallImage: {
    width: 60,
    height: 60,
    marginTop: 5,
  },
  btnColor: {
    height: 40,
    width: 40,
    borderRadius: 40,
    marginHorizontal: 3,
  },
  contentColors: {
    flexDirection: 'row',
    color: 'white',
  },
  name: {
    fontSize: 25,
    color: '#696969',
    fontWeight: 'bold',
  },
  description: {
    fontSize: 20,
    color: '#696969',
  },
  shareButton: {
    marginTop: 10,
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    backgroundColor: '#05445E',
  },
  shareButtonText: {
    color: '#FFFFFF',
    fontSize: 23,
  },
  card: {
    shadowColor: '#00000021',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,
    marginVertical: 4,
    backgroundColor: 'white',
    marginHorizontal: 7,
  },
  cardContent: {
    paddingVertical: 9,
    paddingHorizontal: 19,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 13,
    paddingBottom: 25,
    paddingHorizontal: 16,
    borderBottomLeftRadius: 1.5,
    borderBottomRightRadius: 1,
  },
  cardTitle: {
    color: '#189AB4',
  },
});
