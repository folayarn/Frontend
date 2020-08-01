import axios from 'axios'

        

        export const getList=()=>{
            return axios
            .get('http://localhost:8000/api/allusers',{
                headers:{'Content-Type':'application/json'}

            }).then(res=>{
                return res.data
            }).catch(err=>{
                console.log(err)

            })
            }



    

export const login=(details)=>{
    return axios
    .post('http://localhost:8000/api/login',
    details
    ,{
        headers:{'Content-type':'application/json'}
    }).then(res=>{
        localStorage.setItem('usertoken',res.data.token)

            this.props.history.push('/homepage')
    }).catch(err=>{
        console.log(err)
})
}













