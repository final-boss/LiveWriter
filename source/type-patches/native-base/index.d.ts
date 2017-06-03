import * as React       from 'react';
import * as ReactNative from 'react-native';

declare module 'native-base' {
    namespace NativeBase {
        interface CheckBox {
            checked?: boolean,
            style?: any
        }
    }
}
