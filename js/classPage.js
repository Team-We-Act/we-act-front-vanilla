// import axios from 'axios'
// Vue.component('class-page', {
//     template:`
//     <div class="row">
//           <div class="col-xs-12">

//           </div>
//           <div class="col-xs-12">
//               <div>
//                   <h3>내 클래스.</h3>
//                   <div>
//                       <input v-model="index"/>
//                       <input v-model="name"/>
//                       <input v-model="explain"/>
//                       <button v-on:click="createLec">강의 업로드</button>
//                   </div>
//               </div>
//               <div>
//                   <div v-for="lecture in lectures" >
//                     <div>
//                       <div>
//                           {{lecture.index}}번째 강의,
//                       </div>
//                       <div>
//                           {{lecture.name}}
              
//                       </div>
//                       <p>
//                           {{lecture.explain}}
//                       </p>
//                   </div>
//                 </div>
//               </div>
//           </div>
//       </div>`,
//     methods:{
//         createLec:function(){
//             var obj={
//                 'index':this.index,
//                 'name':this.name,
//                 'explain':this.explain
//             }
//             // axios.post("url주소",{
//             //     obj
//             // },[,config])
//             this.lectures.push(obj)
//         }
//     },
//     data:{
//         "index":'',
//         'name':'',
//         'explain':'',
//         'lectures':[]
//     },
//     watch:{
//         lectures:function(a,b){
//             return a.index<b.index ? -1 : a.index>b.index ? 1 : 0
//         }
//     }
// });



// new Vue ({
//     el:'#app',
//     components:{
//         'class-lecture':lecture
//     },
    
//     methods:{
//         createLec:function(){
            
//         }
//     }
// });






  Vue.component('child-component', {
    props: ['propsdata'],
    template: 
    `<div class="row">
          <div class="col-md-2">
            <div></div>
            <h3>전국 클래스 목록</h3>
            <div></div>
            <div>
                <button></button>
            </div>
            <div>
                <h5>인도</h5>
                <h6>쉽게 배우는 웹프로그래밍</h6>
                <h6>기초부터 시작하는 고등 수학</h6>
            </div>
            <div>
                <h5>필리핀</h5>
                <h6>쉽게 배우는 미적분학</h6>
                <h6>기초부터 시작하는 고등 수학</h6>
            </div>
            <div>
                <h5>캄보디아</h5>
                <h6>쉽게 배우는 웹프로그래밍</h6>
                <h6>기초부터 시작하는 고등 수학</h6>
            </div>
          </div>
          <div class="col-md-10">
              <div>
                  <span></span>
                  <h3>내 클래스.</h3>
                  <div>
                      <input v-model="index"/>
                      <input v-model="lecturename"/>
                      <input v-model="explain"/>
                      <button v-on:click="createLec">강의 업로드</button>
                  </div>
              </div>
              <div class="row">
                    
                  <div class="col-md-4" v-for="lecture in lectures" >
                    <class-lecture v-bind:lecture="lecture"></class-lecture>
                    
                </div>
              </div>
          </div>
      </div>`
      ,
          methods:{
        createLec:function(){
            console.log('bbbbb')
            var obj={
                'index':this.index,
                'lecturename':this.lecturename,
                'explain':this.explain
            }
            // axios.post("url주소",{
            //     obj
            // },[,config])
            console.log(this)
            this.lectures.push(obj)
            console.log(this.lectures)
        }
    },
    data:function(){
        return {
            index:'',
        lecturename:'',
        explain:'',
        lectures:[]}
    },
    watch:{
        lectures:function(a,b){
            console.log(this.lectures)
            return a.index<b.index ? -1 : a.index>b.index ? 1 : 0
        }
    }
  });

  new Vue({
    el: '#app2',
    components:{
        
    },
    data: {
        "index":'',
        'name':'',
        'explain':'',
        'lectures':[]
    }
  });

// var lecture={
//     template:
//     `<div>
//         <div>
//             {{}}번째 강의,
//         </div>
//         <div>
//             {{}}

//         </div>
//         <p>
//             {{}}
//         </p>
//     </div>`
//     ,
    
// }
Vue.component('class-lecture',{
    props:['lecture'],
    template:`<div>
    <div v-on:click="test">{{lecture.index}}번째 강의,
        <div>{{lecture.lecturename}}</div>
        <p>{{lecture.explain}}</p>
    </div></div>`
    ,
    methods:{
        test:function(){
            console.log(this.lecture)
        }
    },
    watch:{
        lecture:function(){
            console.log('ddd',this.lecture)
        }
    }
      
})