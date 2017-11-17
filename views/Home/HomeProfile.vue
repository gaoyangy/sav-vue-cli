<template>
  <div class="home-profile">
    <!-- <Row type="flex">
        <Col span="8">学生编号: yFsS19gA3</Col>
        <Col span="8">获取名单时间:</Col>
        <Col span="8">学生姓名: 张三 沪江</Col>
        <Col span="8">首要号码: 学生/18100000000</Col>       
        <Col span="8">5 | order-4</Col>
        <Col span="8">6 | order-3</Col>
        <Col span="8">7 | order-2</Col>
        <Col span="8">9 | order-4</Col>
        <Col span="8">10 | order-3</Col>
        <Col span="8">11 | order-2</Col>
        <Col span="8">12 | order-1</Col>
    </Row> -->
     <Table border :columns="columns10" :data="data9"></Table>
  </div>
</template>
<script>
  import expandRow from '../components/expand-row.vue';
  export default {
    name: 'HomeProfile',
    components: { expandRow },
    getters: [
    ],
    actions: [
    ],
     data () {
            return {
                columns10: [
                    {
                        type: 'expand',
                        width: 50,
                        render: (h, params) => {
                            return h(expandRow, {
                                props: {
                                    row: params.row
                                }
                            })
                        },
                        sortable: true
                    },
                    {
                        title: 'Name',
                        key: 'name',
                        sortable: true
                    },
                    {
                        title: 'Age',
                        key: 'age',
                        sortable: true
                    },
                    {
                        title: 'Address',
                        key: 'address',
                        sortable: true
                    }
                ],
                data9: [
                    {
                        name: 'John Brown',
                        age: 18,
                        address: 'New York No. 1 Lake Park',
                        job: 'Data engineer',
                        interest: 'badminton',
                        birthday: '1991-05-14',
                        book: 'Steve Jobs',
                        movie: 'The Prestige',
                        music: 'I Cry'
                    },
                    {
                        name: 'Jim Green',
                        age: 25,
                        address: 'London No. 1 Lake Park',
                        job: 'Data Scientist',
                        interest: 'volleyball',
                        birthday: '1989-03-18',
                        book: 'My Struggle',
                        movie: 'Roman Holiday',
                        music: 'My Heart Will Go On'
                    },
                    {
                        name: 'Joe Black',
                        age: 30,
                        address: 'Sydney No. 1 Lake Park',
                        job: 'Data Product Manager',
                        interest: 'tennis',
                        birthday: '1992-01-31',
                        book: 'Win',
                        movie: 'Jobs',
                        music: 'Don’t Cry'
                    },
                    {
                        name: 'Jon Snow',
                        age: 26,
                        address: 'Ottawa No. 2 Lake Park',
                        job: 'Data Analyst',
                        interest: 'snooker',
                        birthday: '1988-7-25',
                        book: 'A Dream in Red Mansions',
                        movie: 'A Chinese Ghost Story',
                        music: 'actor'
                    }
                ]
            }
        }
  }
</script>
