export default {
	findSsn : async () => {
		await FindQuery.run();
		if(FindQuery.data.length==0){
			storeValue('showtext','你还没有注册，请注册！');
		}
		else{
			storeValue('showtext','你已经注册，可以修改！');
		}
		storeValue('show',true);
		}
		}
