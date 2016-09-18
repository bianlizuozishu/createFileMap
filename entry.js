var fs = require('fs')
var path=process.argv[2]
var centxt=''
dfs(path,0)
writeFile(centxt)
function dfs(path,height){
	var files = fs.readdirSync(path)
	files.forEach(function(file){
		var npath = path+'/'+file
		var stat = fs.lstatSync(npath)
		if(!stat.isDirectory()){
			print('*-',height,file)
		}else{
			print('|-',height,file)
			dfs(npath,1+height)
		}
	});
}
function print(type,height,file){
	var str = ''
	for (var i = height; i>0; i--) {
		str+='  '
	}
	centxt+=str+type+file+'\n'
	console.log(str+type+file)
}
function writeFile(centxt){
	fs.writeFile(path+'/fileMap.txt',centxt ,  function(err) {
		if (err) {
			return console.error(err)
		}
	});
}
