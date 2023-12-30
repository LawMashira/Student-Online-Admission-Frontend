export const getResponseError=(error)=>{
                if(error === null || error===undefined){
                return null;
                }
                if(error.response){
                                if(error.response.status===400 && error.response.data){
                                   const responseErrors=error.response.data.errors;
                                   if(responseErrors)  {
                                                const errorData={};
                                                for(const errorItem of responseErrors){
                                                                errorData[errorItem.field]=errorItem.defaultMessage;
                                                }
                                                return errorData;
                                   }   
                                   return null;        
                                }
                }
}