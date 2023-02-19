import React from 'react';
import { View } from 'react-native';
import AlbumList from './components/AlbumList';

function AlbumsContainer(): JSX.Element {
  return (
    <View>
      <AlbumList />
    </View>
  );
}

export default AlbumsContainer;
