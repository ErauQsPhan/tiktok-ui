import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './AccountItems.module.scss';

const cx = classNames.bind(styles);

function AccountItems(props) {
    console.log(props);
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src={
                    props.image ||
                    'https://scontent.fsgn13-2.fna.fbcdn.net/v/t1.6435-1/200589943_3541846406039637_3985123333451515740_n.jpg?stp=cp0_dst-jpg_p56x56&_nc_cat=109&ccb=1-7&_nc_sid=7206a8&_nc_ohc=C8lkPBWxiPgAX-iuEv3&_nc_ht=scontent.fsgn13-2.fna&oh=00_AfB9xmyDaavAFKWZhxpRBGr6wjNTn7evMS_cYQf8lVP7Bg&oe=6445D03B'
                }
                alt="avatar"
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>{props.name}</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>{props.username}</span>
            </div>
        </div>
    );
}

export default AccountItems;
