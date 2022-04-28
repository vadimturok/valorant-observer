import React, {FC} from 'react';
import styles from './footer.module.scss'
import Button from "../Common/Button/Button";

const Footer: FC = () => {
    return (
        <div className={styles.footer}>
            <Button text={'Official website'} type={'button'} background={'simple'}/>
            <Button text={'GitHub'} type={'button'} background={'simple'}/>
        </div>
    );
};

export default Footer;