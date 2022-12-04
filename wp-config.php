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
define( 'DB_NAME', 'social' );

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
define( 'AUTH_KEY',         'oB?1i<8/}y$PW5$0=7^fek1]pt!?9:XqOEomUYjXFJ-k- 9@oLc4YP(9 sPjNz~.' );
define( 'SECURE_AUTH_KEY',  'rXOG$NBR!8%8wF[FOh[C2f-CsL_Ojjf<QI~x09-U*4h1,OQ~j2R5cq:QH+h];}$M' );
define( 'LOGGED_IN_KEY',    '#=CK1!-IEbG^lLY]ExXOrmf<2a0AE_HZN6,pz9UwmLUZ~q<H=)vGdK)_gx4E*gxW' );
define( 'NONCE_KEY',        'mc0W&]..&+oM(S$63!Sko[fap%9SKYk>:*%<(k]I;4cR+wm5@QvVL7=k>w|.t`HP' );
define( 'AUTH_SALT',        '<h~f@qY2]>E=r3D:6)`*|o(3H,e[`u|JNSn{;M=,-fY+&cf-A{2W-:8!z3)#!%TA' );
define( 'SECURE_AUTH_SALT', '8W%Wh]46OlL)U/5sY>VK({$2se9RRS#YdwM?K}blG#NG1IpDa-zQ7cz7I;U21{G^' );
define( 'LOGGED_IN_SALT',   'E?/3#Gp]5Bg^Tii]P8bKt9%~Vt|h+<rOMcyF^KCa/2kSy?|I*5^OVL%C+&Q^vIc`' );
define( 'NONCE_SALT',       '5W_@3}L]t:l0C3NkX:5sVU@.NHWB!oQndt}(L<lCvK!sm<8Ioeev^~sH[E2z9`e1' );

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
