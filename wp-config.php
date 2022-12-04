<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'smart_villages' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'hriU7:Yt-=?SIPPPeo x6D1e=i]%uh?I:6{tnZLjm+Xe#K@]QlfRW0..UjjIHNkh' );
define( 'SECURE_AUTH_KEY',  'W;v;}Cy1E0`Q_T{,RS?A|4 k[B2;dpWdnWLgeIesivJ*p5?6jwbTWHSiy>>yKVeK' );
define( 'LOGGED_IN_KEY',    ' ^Z]QU3c<Wk+Qb<XuhP;Cnlc=_rr5&lu7&Gdf;OE%$~o#8mf{8bryTVfsC5pkiHw' );
define( 'NONCE_KEY',        '7B$HDhb<vyQ]f&}@4r2k]@~-8wcF_i,WJoN?jo!7THXzu}XZ hffVL0AT-V,J2HC' );
define( 'AUTH_SALT',        'd(W6uZMa<|xx(zoV{h2N<r{<z3A/clCcKZ:}HQ%}`TXhehmrJdRQ=qE;ZgEUTq:l' );
define( 'SECURE_AUTH_SALT', '&8iAwin7[Z/)U6iT$?uxt_BE}}!{W_Je*/bNpf]deIA;b+xUfR5V1eNs]ZO|;/Cn' );
define( 'LOGGED_IN_SALT',   'xT6=faGYS[rE.xfG.e_gi{Ljt{ tc<peP:W5A7w;MByO:2Y}%y(S!vY81/&]a0jo' );
define( 'NONCE_SALT',       '05p.K-Yl[hCiX4jd[>f;|AqjSvy[[M<]4hXfC!}?l8u+U]Ss%W5ha{uaM{{dWKP}' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
