/**
 * Created by ��ѩ on 2017/11/28.
 */
$(document).mouseup(function(e){
    var _con = $(' Ŀ������ ');   // ����Ŀ������
    if(!_con.is(e.target) && _con.has(e.target).length === 0){ // Mark 1
        some code...   // ���ܴ���
    }
});
/* Mark 1 ��ԭ��
 �жϵ���¼�������������������ǣ�
 1. ����¼��Ķ�����Ŀ��������
 2. �¼�����ͬʱҲ����Ŀ���������Ԫ��
 */