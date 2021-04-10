
export default  {
    //设置用户登录时获取的id
    setID(state,id){
        state.id=id;
    },
    //重复商品const+1
    superposition(state,index){
        state.Products[index].const+=1;
    },
//添加商品
    Add(state,payload){
        payload.const=1;
        state.Products.push(payload)
    },
//改变选中状态
    changeState(state,iid){
        for(var i=0;i<state.Products.length;i++){
            if(state.Products[i].iid===iid){
                state.Products[i].isSelected=!state.Products[i].isSelected
            }
        }
    },
    setAllTrue(state){
        for(let i=0;i<state.Products.length;i++){
            state.Products[i].isSelected=true;
        }
    },
    setAllFalse(state){
        for(let i=0;i<state.Products.length;i++){
            state.Products[i].isSelected=false;
        }
    }
}
