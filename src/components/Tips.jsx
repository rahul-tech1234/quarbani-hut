import { Card } from "@heroui/react";

const TipsPage = () => {
    return (
        <div className="grid md:grid-cols-3  my-5 gap-5">
            <Card className="transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer">
                <h2 className=" text-2xl font-bold ">🐄 Before Buying</h2>
                <ul className="space-y-2 text-gray-700">
                    <li> Animal's age check করো</li>
                    <li>Animal healthy কিনা দেখো</li>
                    <li>চোখ, দাঁত, হাঁটা-চলা পরীক্ষা করো</li>
                    <li>Weight ও breed সম্পর্কে জানো</li>
                </ul>
            </Card>
            <Card  
            className="transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer">
                <h2 className=" text-2xl font-bold ">🩺 Healthy Animal Checklist</h2>
                <ul className="space-y-2 text-gray-700">
                    <li> পরিষ্কার চোখ ও নাক</li>
                    <li>স্বাভাবিক শ্বাস-প্রশ্বাস</li>
                    <li>ক্ষত বা চর্মরোগ নেই</li>
                    <li>সক্রিয় ও সতেজ</li>
                </ul>
            </Card>
            <Card className="transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer">
                <h2 className=" text-2xl font-bold ">🥬 Feeding Tips</h2>
                <ul className="space-y-2 text-gray-700">
                    <li> পরিষ্কার পানি দিন</li>
                    <li>সুষম খাবার দিন</li>
                    <li>অতিরিক্ত খাবার এড়িয়ে চলুন</li>
                    <li>কুরবানির আগে পশুকে stress-free রাখুন</li>
                </ul>
            </Card>
             
            <Card className="transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer">
                <h2 className=" text-2xl font-bold ">📜 Islamic Guidelines</h2>
                <ul className="space-y-2 text-gray-700">
                    <li>কুরবানির উপযুক্ত পশু নির্বাচন</li>
                    <li>কুরবানির সঠিক সময়</li>
                    <li>পশুর প্রতি সদয় আচরণ</li>
                    <li>মাংস বণ্টনের নিয়ম</li>
                </ul>
            </Card>
            <Card className="transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer">
                <h2 className=" text-2xl font-bold ">🥩 Meat Preservation Tips</h2>
                <ul className="space-y-2 text-gray-700">
                    <li>পরিষ্কারভাবে মাংস কাটুন</li>
                    <li>দ্রুত ঠান্ডা করুন</li>
                    <li>ছোট প্যাকেটে সংরক্ষণ করুন</li>
                    <li>ফ্রিজে সঠিক তাপমাত্রায় রাখুন </li>
                </ul>
            </Card>
            <Card className="transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer">
                <h2 className=" text-2xl font-bold ">♻️ Waste Management</h2>
                <ul className="space-y-2 text-gray-700">
                    <li>নির্দিষ্ট স্থানে বর্জ্য ফেলুন</li>
                    <li>পরিবেশ পরিষ্কার রাখুন</li>
                    <li>স্থানীয় কর্তৃপক্ষের নির্দেশনা মেনে চলুন</li>
                </ul>
            </Card>
        </div>
    );
};

export default TipsPage;