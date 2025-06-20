const base = {
    get() {
        return {
            url : "http://localhost:8080/gaoxiaohanfuzulinwangzhan/",
            name: "gaoxiaohanfuzulinwangzhan",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/gaoxiaohanfuzulinwangzhan/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "高校汉服租赁网站"
        } 
    }
}
export default base
