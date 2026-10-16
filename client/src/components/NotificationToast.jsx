export default function NotificationToast({ message, type = 'success' }) {
  return (
    <div className={`notification-toast${type === 'info' ? ' info' : ''}`}>
      <span>{type === 'success' ? '✅' : 'ℹ️'}</span>
      <span>{message}</span>
    </div>
  );
}
