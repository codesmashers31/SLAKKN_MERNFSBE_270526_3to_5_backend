

const withCounter = (WrappedComponent) =>{

    console.log(WrappedComponent);
    
    
    return (props)=>{

    return <WrappedComponent {...props}  />
}

}
export default withCounter
