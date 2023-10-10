import {StyleSheet , StatusBar} from 'react-native';

export default StyleSheet.create({   

    containnerBody:{
       flex: 1,
       paddingTop: StatusBar.currentHeight,
   },
     viewHeader:{
         width:'auto',
         height:150,          
         flexDirection:'row',
         alignItems:'center',
         padding:10,
       }, 
     viewImgHeader:{
        width:'26%',
        height:'100%',             
     },
     imgHeader:{
        width:'150%',
        height:'100%',
        resizeMode:'contain',
        borderRadius: 100 / 2       
     },     
     textHeader:{         
        fontSize:22, 
        fontWeight: 'bold', 
        color:'#cc0000',
        marginLeft:'20%'       
     },


    containnerMain:{
        width:'98%',
        height:'auto',
        flex:1,      
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',               
     },

    containnerProduto:{
        width:'97%',       
        backgroundColor: 'rgba(255, 255, 223, 0.7)',
        marginTop:30,         
        padding:5,
        alignItems:'center',        
        borderWidth:5,
        borderStyle:'solid',
        borderColor:'black',
        borderRadius: 5    
    },
    viewAbastecer:{
        width:'98%',
        height:70,  
        backgroundColor: 'rgba(255, 255, 223, 0.7)',       
        flexDirection: "row",        
        alignItems:'center',
        justifyContent:'space-evenly',
        paddingTop:5,
        paddingBottom:5,        
        margin:5,
        borderRadius: 5,                
    }, 
    viewAbastecerImg:{
        width:60,
        height:60,
        resizeMode:'contain',
        borderRadius: 50/2      
        },

    viewInfo:{
        width:'97%',
        maxHeight:100, 
        alignItems:'center',
   },
    textInfo:{   
        fontWeight: 'bold',     
        color:'#663300',
        fontSize:16,  
        textAlign:'center',      
    },

    viewVendas:{
        width:'97%',
        height:80,        
        backgroundColor: 'rgba(255, 255, 223, 0.7)',
        flexDirection: "row",
        justifyContent:'space-evenly',
        alignItems:'center',
        paddingTop:5,
        paddingBottom:5,  
        margin:5,
        borderRadius: 5       
    },   
   textVendas:{   
    fontWeight: 'bold',     
    color:'#663300',
    fontSize:18,          
},    

   viewSubTotal:{
    width:'95%',
    height:80,   
    backgroundColor: 'rgba(255, 255, 223, 0.7)',
    marginTop:5,     
    justifyContent:'space-evenly',
    alignItems:'center',
    borderRadius: 5     
},
//+1 -1
gradientTouchS:{ 
    width:40,
    height:50,   
    borderRadius:5,    
    alignItems:'center',
    justifyContent:'center'
   },
//Zerar   
   gradientTouchM:{ 
    width:60,
    height:50,   
    borderRadius:5,    
    alignItems:'center',
    justifyContent:'center'
   },
// Dinheiro pix cartão
 gradientTouchL:{ 
    width:100,
    height:50,   
    borderRadius:5,    
    alignItems:'center',
    justifyContent:'center'
   }, 
//Abastecer
   gradientTouchXL:{ 
    width:95,
    height:50,
    marginTop:10,
    marginBottom:10,   
    borderRadius:5,    
    alignItems:'center',
    justifyContent:'center'
   },

   touchText:{
    textAlign:'center',
    fontWeight: 'bold',
    fontSize:14,
    color:'white'     
},
    viewAmount:{
        width:'97%',
        height:90,
        backgroundColor: 'rgba(255, 255, 223, 0.7)',         
        justifyContent:'space-evenly',
        alignItems:'center', 
        marginTop:20,
        borderWidth:5,
        borderStyle:'solid',
        borderColor:'black',         
        borderRadius: 5         
    },

   viewShare:{
    flexDirection: "row",
    padding:20,    
   },

    btnShare:{
       marginStart:20
    }    
          
});