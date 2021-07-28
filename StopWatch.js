
let sw = {
    ntime:0,
    nduration,
    getTimeFn:function(){
        let d = new Date();
        let time = d.getTime();
        return time;
            
    },
    start: function(){
        if (ntime ===0){
            ntime = 1;
            ntime = this.getTimeFn();
            
        }else{
            new Error();
        }
        

    },
    stop:function(){
        if (ntime!==0){
            // ntime=0;
            nduration=this.getTimeFn()-ntime;
            return nduration;
        }else{
            new Error();
        }
        
    },
    reset:function(){
        ntime = 0;
    }

   
}

console.log(sw.start());
console.log(sw.stop());
