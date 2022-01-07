import { publicRequest, userRequest } from "../requestMethod";
import { deleteProductFailure,
         deleteProductStart,
         deleteProductSuccess,
         getProductFailure,
         getProductStart,
         getProductSuccess,
         updateProductStart,
         updateProductSuccess,
         updateProductFailure,
         addProductStart,
         addProductSuccess,
         addProductFailure } from "./productRedux";

export const getProducts = async(dispatch) => {
    dispatch(getProductStart());
    try{
      const res = await publicRequest.get("/products");
      dispatch(getProductSuccess(res.data));
    }catch(err){
      dispatch(getProductFailure());
    }
}

export const deleteProducts = async (id, dispatch) => {
    dispatch(deleteProductStart());
    try{
     const res = await userRequest.delete(`/products/${id}`);
     dispatch(deleteProductSuccess(id));
    }catch(err){
     dispatch(deleteProductFailure());
    }
}

export const updateProducts = async (id, product, dispatch) => {
    dispatch(updateProductStart());
    try{
     dispatch(updateProductSuccess({id, product}));
    }catch(err){
     dispatch(updateProductFailure());
    }
};

export const addProducts = async (product, dispatch) => {
    dispatch(addProductStart());
    try{
     const res = await userRequest.post("/products", product);
     dispatch(addProductSuccess(res.data));
    }catch(err){
     dispatch(addProductFailure());
    }
}
