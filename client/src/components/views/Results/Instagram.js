const express = require('express');
const Instagram = require('instagram-web-api');
const { username, password } = require('./credentials'); // Instagram 계정 정보

const app = express();
const port = 3000;

// Instagram 로그인 정보
const client = new Instagram({ username, password });

app.get('/shareInstagramStory', async (req, res) => {
    try {

        await client.login();

        const mediaId = await client.uploadPhoto({
            photo: '이미지_파일_경로',
            caption: '스토리 캡션',
        });

        const storyURL = `https://www.instagram.com/stories/${username}/${mediaId}/`;

        res.json({ storyURL });
    } catch (error) {
        console.error('Instagram 스토리 업로드 오류:', error);
        res.status(500).json({ error: 'Instagram 스토리 업로드 중에 오류가 발생했습니다.' });
    }
});

app.listen(port, () => {
    console.log(`서버가 포트 ${port}에서 실행 중입니다.`);
});