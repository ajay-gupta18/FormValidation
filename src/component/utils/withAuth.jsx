function withAuth(Componet){
    const isAuthenticated = false;
    return function(){
        if(isAuthenticated){
            return <Componet/>
        }else{
            return <p>Please login to use Componet</p>
        }
    }
}
export default withAuth