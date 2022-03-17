const app = new Vue({
    el:"#app",
    data:{
        message:'你好啊',
        showPrice:true,
        books:[
            {id:1,name:'java编程思想',date:'2022-01-02',price:10,count:0},
            {id:2,name:'多线程编程艺术',date:'2022-01-02',price:20,count:0},
            {id:3,name:'javaScript基础',date:'2022-01-02',price:30,count:0},
            {id:4,name:'设计模式详解',date:'2022-01-02',price:40,count:0},
        ]
    },
    methods:{
        decrement(index){
             this.books[index].count --
        },
        increment(index){
             this.books[index].count ++
        },
        removeHandle(index){
            this.books.splice(index,1)
        }
    },
    computed:{
        totalPrice(){
            let totalPrices=0
            /*for (let i in this.books){
                totalPrices += (this.books[i].price * this.books[i].count)
            }
            return totalPrices*/

            /*for (let item of this.books){
                totalPrices += item.price * item.count
            }
            return totalPrices*/
            /*return this.books.reduce(function (preValue,book){
                return preValue + book.price * book.count
            },0)*/
            return this.books.reduce((pre,book) => pre + book.price * book.count,0)

        }
    },
    filters:{
        showPrice(price){
            return '￥' + price.toFixed(2)
        }
    }
})


//编程范式：命令式编程/声明式编程
//编程范式：面向对象编程（第一公民：对象）/函数式编程（第一公民：函数）
//filter/map/reduce
//1、filter中的回调函数有一个要求，必须返回一个boolean值。
// true:当返回true时，函数内部会自动将这次回调的n加入到新的数组中。 false：返回false时，函数内部会过滤掉该值
const nums= [10,20,111,222,333,40,50]
/*let newNums = nums.filter(function (n){
    return n < 100
})
console.log(newNums);*/
//2、map函数 遍历
/*let new2Nums = newNums.map(function (n){
    return n * 2
})
console.log(newNums);
console.log(new2Nums);*/

//3、reduce函数的使用
//reduce作用:对数组中所有内容进行汇总
/*let totle = new2Nums.reduce(function (preValue,n){
    return preValue + n
},0)
console.log(totle);*/
//第一次：preValue 0   n  20
//第二次：preValue 20   n  40
//第三次：preValue 60   n  80
//第四次：preValue 140   n  100
//240

/*let total  = nums.filter(function (n){
    return n <100
}).map(function (n){
    return n * 2
}).reduce(function (preValue,n){
    return preValue + n
},0)
console.log(total);*/

/*let total = nums.filter(n => n<100).map(n => n*2).reduce((pre,n) => pre + n)
console.log(total);*/

//1、取出小于100的数字
/*let newNums = []
for (let n of nums){
    if (n<100){
        newNums.push(n)
    }
}*/

//2、取出所有小于100的数字进行转化，全部*2
/*let new2Nums = []
for (let n of newNums){
    if (n<100){
        new2Nums.push(n * 2)
    }
}
console.log(newNums)*/
//3、将所有newNums卒子相加，得到最终的结果
/*
let total=0
for (let n of new2Nums){
    total += n
}
console.log(newNums)*/
