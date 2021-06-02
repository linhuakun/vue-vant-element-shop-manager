export const exportCSV = async (mainList, mainTitle, mainTitleForKey, filename) => {
    const mainStr = [];
    mainStr.push(mainTitle.join(',') + '\n'); // 把表格名称拼接进去
    for (let i = 0; i < mainList.length; i++) {
        const temp = [];
        for (let j = 0; j < mainTitleForKey.length; j++) {
            const strItem = '"' + mainList[i][mainTitleForKey[j]] + '"';
            temp.push(strItem + '');
        }
        mainStr.push(temp.join(',') + '\n');
    }
    const merged = mainStr.join('');
    const uri = 'data:text/csv;charset=utf-8,\ufeff' +encodeURIComponent(merged);
    const link = document.createElement('a'); //通过创建a标签实现
    link.href = uri;
    link.download = `${filename}.csv`;
    document.body.appendChild(link);
    link.click();
    return;
}