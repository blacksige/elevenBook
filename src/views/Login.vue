<template>
  <div class="login-body bg-pan-bottom">
    <div class="container">
          <h1>bilibili</h1>
          <div class="form">
              <input class="tbx" type="text" placeholder="请输入你的昵称" v-model="userName">
              <input class="sub" type="submit" value="let's go!" @click="login()">
          </div>
          <span v-bind:class="{ in: isHover, out: isHoverLeave }" v-show="isShow" id="spand" ></span>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Login',
  data(){
    return{
      isHover:false,
      isHoverLeave:false,
      isShow : false,

      userName:''
    }
      
  },
  
  mounted(){
      // 定义一个con绑定 .container
        const con=document.querySelector('.container');

        // 定义两个函数开关（门）
        let isIn=true;      //鼠标进去的门，默认打开
        let isOut=false;    //鼠标出去的门，默认关闭
        // var span;           //给未出生的元素取个名字
        var el;
        //监听鼠标进去的事件+进去的方法
        con.addEventListener('mouseenter',(e)=>{
            if(isIn){//如果进去的门时打开的，就可以执行这个函数
                this.isHover = true;
                this.isHoverLeave =  false;
                this.isShow = true;
                //获取进入的鼠标位置
                //生成元素的位置=进入点距离窗口的距离-父盒子距离窗口的距离
                let inx=e.clientX-e.target.offsetLeft;
                let iny=e.clientY-e.target.offsetTop;

                //创建一个span元素，并且给它对应的出生坐标
                el=document.getElementById('spand');

                el.style.left=inx+'px';
                el.style.top=iny+'px';

                // span = document.querySelector('.container span');
                isIn=false; //关闭进来的门（不能使用进入的方法）
                isOut=true; //打开出去的门（可以使用出去的方法）
            }
        })

        //监听鼠标出来的事件+出来的方法
        con.addEventListener('mouseleave',(e)=>{

            if(isOut){
                //获取出去的鼠标位置
                //生成元素的位置=进入点距离窗口的距离-父盒子距离窗口的距离
                let inx=e.clientX-e.target.offsetLeft;
                let iny=e.clientY-e.target.offsetTop;

                this.isHover = false;
                this.isHoverLeave =  true;
                // $('.container span').removeClass('in');//移除进入的动画
                // $('.container span').addClass('out');//添加出去的动画
                document.getElementById("spand").style.left = inx+'px';
                document.getElementById("spand").style.top = iny+'px' 
                // $('.out').css('left',inx+'px');//添加出去的坐标
                // $('.out').css('top',iny+'px');

                isOut=false;//关闭出去的大门

                //当动画结束后再删除元素
                setTimeout(()=>{
                    this.isShow = false;
                    isIn=true;//打开进来的大门
                },200)
                
            }
        })

  },
 
  methods:{
    login(){
      window.sessionStorage.setItem('Token',true);
      window.sessionStorage.setItem('username',this.userName);
      window.sessionStorage.setItem('isShowBar',true);
     
      this.$router.push('/');
      this.$router.go(0);
    }
  }
}
</script>

<style lang="less" scoped>
.login-body {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.container{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 300px;
    height: 450px;
    border-radius: 20px;
    background-color: #34495e;
    box-shadow: 15px 15px 10px rgba(33,45,58,0.3);
    overflow: hidden;
    position: absolute;
    
}
.container .form{
    width: 300px;
    height: 200px;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    align-items: center;
    z-index: 1;
}
.container .form .tbx{
    width: 200px;
    height: 40px;
    outline: none;
    border: none;
    border-bottom: 1px solid #fff;
    background:none;
    color: #fff;
}
/* 设置placeholder */
.container .form .tbx::placeholder{
    color: #fff;
    font-size: 15px;
    text-align: center;
}
.container .form .sub{
    width: 200px;
    height: 40px;
    outline: none;
    border: 1px solid #fff;
    border-radius: 20px;
    letter-spacing: 5px;
    color: #fff;
    background: none;
    cursor: pointer;
}
.container .form .sub:hover{
  background-color: #34495E;
}
.container h1{
    z-index: 1;
    color: #ecf0f1;
    letter-spacing: 5px;
    padding-left: 5px;
    font-size: 50px;
    font-weight: 100;
    text-shadow: 5px 5px 5px rgba(33,45,58,0.3);
}
/* 设置鼠标进入的样式 */
.container .in{
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 0;
    height: 0;
    border-radius: 50%;
    background: #3498bd;
    transform: translate(-50%,-50%);
    /* 使用in动画，持续0.5s,缓出的时间函数，停留在最后一帧 */
    animation: in 0.5s ease-out forwards;
}
/* 设置鼠标离开的样式 */
.container .out{
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 1200px;
    height: 1200px;
    border-radius: 50%;
    background: #3498bd;
    transform: translate(-50%,-50%);
    animation: out 0.5s ease-out forwards;
}
//背景
.bg-pan-bottom {
	-webkit-animation: bg-pan-bottom 8s both;
	animation: bg-pan-bottom 8s both;
}

@-webkit-keyframes bg-pan-bottom {
  0% {
    background-position: 50% 0%;
  }
  100% {
    background-position: 50% 100%;
  }
}
@keyframes bg-pan-bottom {
  0% {
    background-position: 50% 0%;
  }
  100% {
    background-position: 50% 100%;
  }
}

/* 设置鼠标进入时，元素的动画 */
@keyframes in{
    /* 初始关键帧 */
    0%{
        width: 0;
        height: 0;
    }
    /* 结尾关键帧 */
    100%{
        width: 1200px;
        height: 1200px;
    }
}
/* 设置鼠标离开时，元素的动画 */
@keyframes out{
    /* 初始关键帧 */
    0%{
        width: 1200px;
        height: 1200px;
    }
    /* 结尾关键帧 */
    100%{
        width: 0;
        height: 0;
    }
}
</style>