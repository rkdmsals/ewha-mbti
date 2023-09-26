const express = require('express');
const Instagram = require('instagram-web-api');
const { username, password } = require('./credentials'); // Instagram 계정 정보

const app = express();
const port = 3000;

// Instagram 로그인 정보
const client = new Instagram({ username, password });

app.get('/shareInstagramStory', async (req, res) => {
    try {
        // Instagram에 로그인
        await client.login();

        // Instagram 스토리 미디어 업로드 및 스토리 생성
        const mediaId = await client.uploadPhoto({
            photo: '이미지_파일_경로', // 업로드할 이미지 파일 경로
            caption: '스토리 캡션', // 스토리에 추가할 캡션
        });

        // 생성된 스토리에 대한 URL 가져오기
        const storyURL = `https://www.instagram.com/stories/${username}/${mediaId}/`;

        // 스토리 URL을 클라이언트로 전송
        res.json({ storyURL });
    } catch (error) {
        console.error('Instagram 스토리 업로드 오류:', error);
        res.status(500).json({ error: 'Instagram 스토리 업로드 중에 오류가 발생했습니다.' });
    }
});

app.listen(port, () => {
    console.log(`서버가 포트 ${port}에서 실행 중입니다.`);
});