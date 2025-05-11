
// export const apiUrl = 'http://localhost:8000/api/'
// export const fileUrl = 'http://localhost:8000/'

export const apiUrl = "http://elevateworks.wuaze.com/api/"
export const fileUrl = "http://elevateworks.wuaze.com/"

export const token = () => {
    const userInfo = localStorage.getItem('userInfo')
    const data = JSON.parse(userInfo)
    return data.token
}
