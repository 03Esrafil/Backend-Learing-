const graphql=require('graphql')

const {
    GraphQLObjectType,
    GraphQLSchema,
    GraphQLInt,
    GraphQLList,
    GraphQLString
}=graphql;

const User=new GraphQLObjectType(
    {
        name:'user',
        fields:()=>({
            id:{type:GraphQLInt},
            name: {type:GraphQLString},
            email:{type:GraphQLString},
            phoneNumber:{type:GraphQLInt}
        })
    }
);

const RootQuery=new GraphQLObjectType({
    name:"xyz",
    fields:{
        codeImprove:{
            type:new GraphQLList(User),
            resolve(parent,args){
                let data=[{
                    id:12,name:'codeimprove',email:"code@gmail.com",phoneNumber:8545632017    
                },
                {
                    id:13,name:'gcc',email:"gcc@gmail.com",phoneNumber:7845632017    
                }];
                return data;
            }
        }
    }
});
module.exports=new GraphQLSchema({query:RootQuery})