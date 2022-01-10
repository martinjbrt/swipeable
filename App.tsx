import React from 'react';
import {FlatList, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';
import SwipeableRow from './src/components/SwipeableRow';

const DATA = [
  {
    from: 'Leonardo Wistuba',
    when: '3:11 PM',
    message:
      'Unus pro omnibus, omnes pro uno. Nunc scelerisque, massa non lacinia porta, quam odio dapibus enim, nec tincidunt dolor leo non neque',
  },
  {
    from: 'Florencia Bosch',
    when: '11:46 AM',
    message:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vivamus hendrerit ligula dignissim maximus aliquet. Integer tincidunt, tortor at finibus molestie, ex tellus laoreet libero, lobortis consectetur nisl diam viverra justo.',
  },
  {
    from: 'Monika Pencierzynska',
    when: '6:06 AM',
    message:
      'Sed non arcu ullamcorper, eleifend velit eu, tristique metus. Duis id sapien eu orci varius malesuada et ac ipsum. Ut a magna vel urna tristique sagittis et dapibus augue. Vivamus non mauris a turpis auctor sagittis vitae vel ex. Curabitur accumsan quis mauris quis venenatis.',
  },
  {
    from: 'Martin Joubert',
    when: 'Yesterday',
    message:
      'Vivamus id condimentum lorem. Duis semper euismod luctus. Morbi maximus urna ut mi tempus fermentum. Nam eget dui sed ligula rutrum venenatis.',
  },
];

const App: React.FC = () => {
  const Row = (data: {item: {from: string; when: string; message: string}}) => (
    <RectButton style={styles.rectButton}>
      <Text style={styles.fromText}>{data.item.from}</Text>
      <Text numberOfLines={2} style={styles.messageText}>
        {data.item.message}
      </Text>
      <Text style={styles.dateText}>{data.item.when}</Text>
    </RectButton>
  );

  const SwipeableListItem = (data: {
    item: {from: string; when: string; message: string};
  }) => {
    return (
      <SwipeableRow>
        <Row item={data.item} />
      </SwipeableRow>
    );
  };

  return (
    <SafeAreaView>
      <FlatList
        data={DATA}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        renderItem={(data: {
          item: {from: string; when: string; message: string};
        }) => <SwipeableListItem item={data.item} />}
        keyExtractor={(_, index: number) => `message ${index}`}
      />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  rectButton: {
    flex: 1,
    height: 80,
    paddingVertical: 10,
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    flexDirection: 'column',
    backgroundColor: 'white',
  },
  separator: {
    backgroundColor: 'rgb(200, 199, 204)',
    height: StyleSheet.hairlineWidth,
  },
  fromText: {
    fontWeight: 'bold',
    backgroundColor: 'transparent',
  },
  messageText: {
    color: '#999',
    backgroundColor: 'transparent',
  },
  dateText: {
    backgroundColor: 'transparent',
    position: 'absolute',
    right: 20,
    top: 10,
    color: '#999',
    fontWeight: 'bold',
  },
});
