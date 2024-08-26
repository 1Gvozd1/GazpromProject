import { Link, LinkProps } from 'react-router-dom';
import { FC } from 'react';

interface AppLinkProps extends LinkProps {}

export const AppLink: FC<AppLinkProps> = (props) => {
    const {
        to,
        children,
        ...otherProps
    } = props;

    return (
        <Link
            to={to}
            {...otherProps}
        >
            {children}
        </Link>
    );
};
