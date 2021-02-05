// import axios from 'axios'

// Vue.component('nav-bar',{
//     // name:'navbar',
//     template:`
//     <div class="col-md-2">
//             <div></div>
//             <h3>전국 클래스 목록</h3>
//             <div></div>
//             <div>
//                 <button></button>
//             </div>
//             <div>
//                 <h5>인도</h5>
//                 <h6>쉽게 배우는 웹프로그래밍</h6>
//                 <h6>기초부터 시작하는 고등 수학</h6>
//             </div>
//             <div>
//                 <h5>필리핀</h5>
//                 <h6>쉽게 배우는 미적분학</h6>
//                 <h6>기초부터 시작하는 고등 수학</h6>
//             </div>
//             <div>
//                 <h5>캄보디아</h5>
//                 <h6>쉽게 배우는 웹프로그래밍</h6>
//                 <h6>기초부터 시작하는 고등 수학</h6>
//             </div>
//           </div>`
// })





  Vue.component('child-component', {
    props: ['propsdata'],
    
    // components:{
    //     'nav-bar':nav-bar
    // },
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
                  <h3>내 클래스</h3>
                  <div>
                      
                      
                      
                      <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal" data-whatever="@mdo">강의 업로드</button>
                  </div>
                  
                  <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h5 class="modal-title" id="exampleModalLabel">New message</h5>
                          <button v-on:click="close" type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>
                        <div class="modal-body">
                          <form>
                            <div class="form-group">
                              <label for="recipient-name" class="col-form-label">강의 제목</label>
                              <input v-model="lecturename" type="text" class="form-control" id="recipient-name">
                            </div>
                            <div class="form-group">
                              
                              <input type="file" class="form-control" id="recipient-name">
                            </div>
                            <div class="form-group">
                              <label for="message-text" class="col-form-label">강의 내용</label>
                              <textarea v-model="explain" class="form-control" id="message-text"></textarea>
                            </div>
                          </form>
                        </div>
                        <div class="modal-footer">
                          <button v-on:click="close" type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                          <button data-dismiss="modal" v-on:click="createLec" type="button" class="btn btn-primary">확인</button>
                        </div>
                      </div>
                    </div>
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
            this.showModal=true
            console.log('bbbbb')
            var index=this.lectures.length
            var obj={
                'index':index,
                'lecturename':this.lecturename,
                'explain':this.explain
            }
            // axios.post("url주소",{
            //     obj
            // },[,config])
            console.log(this)
            this.lectures.push(obj)
            console.log(this.lectures)
            this.lecturename=''
            this.explain=''
        },
        close:function(){
            this.showModal=false
            this.lecturename=''
            this.explain=''
        }
    },
    data:function(){
        return {
            
        lecturename:'',
        explain:'',
        lectures:[],
        showModal:false}
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

