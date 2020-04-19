import router from 'umi/router';
import Util from './../util';

const { handleLocalStorage } = Util;

export default function(props) {
  const user = handleLocalStorage.get('user');
  console.log(user);
  if(user){
    if(props.location.pathname==='/'){
      router.push('/admin/home');
    }else{
      router.push(props.location.pathname);
    }
  }else{
    router.push('/login');
  }
  return null;
}
