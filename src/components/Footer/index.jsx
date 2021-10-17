import { View } from '@tarojs/components'
import Logout from '../Logout'
import LoginForm from '../LoginForm'
import { AtFloatLayout } from 'taro-ui'
import './index.scss'
import { useSelector, useDispatch } from 'react-redux'
import { SET_IS_OPENED } from '../../constants'

export default function Footer(props) {
    const nickName = useSelector(state => state.user.nickName)
    const dispatch = useDispatch()
    // 双取反来构造字符串对应的布尔值，用于标志此时是否用户已经登录
    const isLogged = !!nickName
    const isOpened = useSelector(state => state.user.isOpened)
    return (
        <View className="mine-footer">
            {isLogged && <Logout />}
            <View className="tuture-motto">
                {isLogged ? 'From 图雀社区 with Love ❤' : '您还未登录'}
            </View>
            <AtFloatLayout
                isOpened={isOpened}
                title="登录"
                onClose={() =>
                    dispatch({ type: SET_IS_OPENED, payload: { isOpened: false } })
                }
            >
                <LoginForm />
            </AtFloatLayout>
        </View>
    )
}
