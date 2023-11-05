import { createBoard } from '@wixc3/react-board';
import Classnames from 'classnames';

export default createBoard({
    name: 'Footer',
    Board: () => <div className="footer">
        <img src="https://d2x3xhvgiqkx42.cloudfront.net/7fc3b16f-9934-4912-85a2-85a144adbd8f/fb83e0a2-4018-46f9-9577-2c617e811dbf/2022/11/30/5079783d-84e1-4561-8b93-e709742ee656/d8d978b6-f60d-4611-97bb-723739358d0a.png" alt="" className="logo" />
        <button className={Classnames('button', 'join')} onClick={() => window.open('https://discord.gg/fg3Ywsa44N', '_blank')}>Join our <img src="https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/636e0a6a49cf127bf92de1e2_icon_clyde_blurple_RGB.png" alt="" height="20" className={Classnames('join', 'icon')} /> Community</button>
        <button className={Classnames('button', 'contact')} onClick={() => window.open('https://help.codux.com/en/contact', '_blank')}>Contact Us</button></div>,
    isSnippet: true,
    environmentProps: {
        canvasWidth: 862,
        canvasHeight: 137,
    }
});
