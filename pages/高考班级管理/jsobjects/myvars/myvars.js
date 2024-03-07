export default {
	school_year: "2022-2023",
	mygrade: [
  {
    "label": "高一",
    "value": "高一"
  },
  {
    "label": "高二",
    "value": "高二"
  },
  {
    "label": "高三",
    "value": "高三"
  }
],
	mylogin: async () => {
		await user.run();
		if(user.data.length > 0){
			if(user.data[0].password === Input2.text){
				await storeValue("class",user.data[0]["class"]);
				FindQuery.run();
				storeValue("mytab","Tab2");
			}
			else{
				showAlert("密码错误！");
			}
		}
	else{
		showAlert("用户名错误！");
	}
		}
}