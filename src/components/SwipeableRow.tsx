import React from 'react';
import {Animated, StyleSheet, Text, View} from 'react-native';
import {RectButton, Swipeable} from 'react-native-gesture-handler';

interface SwipeableRowProps {
  readonly children: React.ReactNode;
}

const SwipeableRow: React.FC<SwipeableRowProps> = props => {
  const {children} = props;

  const renderRightAction = (text: string, color: string) => {
    return (
      // eslint-disable-next-line react-native/no-inline-styles
      <Animated.View style={{flex: 1, transform: [{translateX: 0}]}}>
        <RectButton style={[styles.rightAction, {backgroundColor: color}]}>
          <Text style={styles.actionText}>{text}</Text>
        </RectButton>
      </Animated.View>
    );
  };

  const renderRightActions = () => (
    <View
      // eslint-disable-next-line react-native/no-inline-styles
      style={{
        width: 192,
        flexDirection: 'row',
      }}>
      {renderRightAction('More', '#C8C7CD')}
      {renderRightAction('Flag', '#ffab00')}
      {renderRightAction('More', '#dd2c00')}
    </View>
  );

  return (
    <Swipeable
      friction={2}
      leftThreshold={30}
      rightThreshold={40}
      renderRightActions={renderRightActions}>
      {children}
    </Swipeable>
  );
};

export default SwipeableRow;

const styles = StyleSheet.create({
  leftAction: {
    flex: 1,
    backgroundColor: '#497AFC',
    justifyContent: 'center',
  },
  actionText: {
    color: 'white',
    fontSize: 16,
    backgroundColor: 'transparent',
    padding: 10,
  },
  rightAction: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
});
