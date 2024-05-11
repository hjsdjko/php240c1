const base = {
    get() {
        return {
            url : "http://localhost:8080/php240c1/",
            name: "php240c1",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/php240c1/front/h5/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "基于微信小程序的家政服务预约系统"
        } 
    }
}
export default base
