// 时间年月
const normalDate=(time)=>{
	if(time){
		var oDate=new Date();
		oDate.setTime(time);

		var y=oDate.getFullYear();
		var m=oDate.getMonth()+1;
		var d=oDate.getDate();

		var h=oDate.getHours();
		var mm=oDate.getMinutes();
		var s=oDate.getSeconds();

		return y+'年'+m+'月';
	}
}
// 时间年月分秒
export const normalTime=(time)=>{
	if(time){
		var oDate=new Date();
		oDate.setTime(time);

		var y=oDate.getFullYear();
		var m=oDate.getMonth()+1;
		var d=oDate.getDate();

		var h=oDate.getHours();
		var mm=oDate.getMinutes();
		var s=oDate.getSeconds();

		return y+'-'+m+'-'+d+' '+h+':'+mm+':'+s;
	}
}
export default{
    normalTime,
    normalDate
}