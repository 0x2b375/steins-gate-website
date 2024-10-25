import { Input, Button, message } from "antd";
import { useState } from "react";

const DMailSender = () => {
  const [dmail, setDmail] = useState("");

  const sendDMail = () => {
    if (dmail.trim() === "") {
      message.error("Are you sure it's a proper D-Mail?");
      return;
    }
    
    message.success(`D-Mail sent: ${dmail}`);
    setDmail("");
  };

  return (
    <div className='flex flex-col items-center mt-8 p-2 rounded-lg shadow-lg border-4 border-[#903c39] max-w-xs mx-auto'>
      <div className='w-full text-white p-2 rounded-t-lg'>
        <div className='flex justify-between items-center'>
          <span>••••</span>
         
          <span>📧🔋</span>
        </div>
      </div>
      <div className='w-full bg-primary p-4 rounded-b-lg'>
        <div className='bg-[#b76d68] rounded-sm text-black p-1 mb-2 text-sm'>
          受信メール
        </div>
        <div className='text-white text-sm mb-1 border-b-2'>
          受信日時：{new Date().toLocaleString()}
        </div>
        <div className='text-white text-sm mb-1 border-b-2'>差出人：未知</div>
        <Input.TextArea
          value={dmail}
          onChange={(e) => setDmail(e.target.value)}
          placeholder='テレビお見る'
          className='mb-2 w-full border-gray-300 text-primary'
          rows={4}
        />
        <div className='flex justify-between mt-2'>
          <Button className='bg-orange-300 text-black'>戻る</Button>
          <Button className='bg-orange-300 text-black'>データ</Button>
          <Button onClick={sendDMail} className='bg-orange-300 text-black'>
            送信
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DMailSender;
