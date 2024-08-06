import { useEffect, useState } from 'react';
import PersonF from '../../public/perfil.png'
import { getUserData } from '../integration/Me';
import Cookie from 'js-cookie';
import { useNavigate } from 'react-router-dom';


function Profile() {
    const [userData, setUserData] = useState<{ userName: string, score: number } | null>(null);
    useEffect(() => {
        const fetchUserData = async () => {
          try {
            const data = await getUserData();
            setUserData(data);
          } catch (err) {
            console.error(err)
          }
        };
    
        fetchUserData();
    }, []);

    const navigate = useNavigate();
    const removeToken = () => {
        Cookie.remove('token');
        navigate('/');
    }

    return (
       <div className="bg-colorBase h-full w-full flex justify-start items-center flex-col">
             <div className="w-11/12 h-full flex items-center justify-center">
                <div className=" bg-colorSide w-[450px] pb-10 border-[1px] border-lineBorder rounded-lg flex flex-col -mt-14">
                    <h3 className="text-4xl text-textC font-chakra-medium pl-7 pt-5 pb-2 border-b-[1px] border-lineBorder">Sua conta</h3>
                    <div className="flex items-center justify-center h-64 gap-x-10">
                        <img src={PersonF} className="w-44 h-44"></img>
                        {userData && (
                            <div className='flex items-start flex-col w-44 h-44 mt-5'>
                                <p className='font-chakra-medium text-textC text-4xl mb-5'>{userData.userName}</p>
                                <p className='font-chakra-medium text-textC text-2xl mb-5'>{userData.score}</p>
                                <button className="w-full h-10 border-[1px] border-hulk rounded-lg flex items-center justify-center font-chakra-medium hover:font-chakra-semibold
                                 text-hulk text-lg hover:bg-colorRed hover:border-colorRed transition-all ease-in hover:text-colorBase" onClick={removeToken}>Logout</button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
       </div>
    )
}

export default Profile;