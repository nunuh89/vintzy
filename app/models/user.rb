class User < ApplicationRecord
  attr_reader :password

  after_initialize :ensure_session_token

  validates :email, :password_digest, :session_token, presence: true
  validates :email, uniqueness: true
  validates :password, length: { minimum: 6, allow_nil: true }

  def password=(password)
    self.password_digest = BCrypt::Password.create(password)
    @password = password
  end

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    return nil unless user
    user.password_is?(password) ? user : nil
  end

  def password_is?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    self.session_token = generate_session_token
    self.save
    self.session_token
  end

  private

  def ensure_session_token
    self.session_token ||= generate_session_token
  end

  def generate_session_token
    SecureRandom.urlsafe_base64(16)
  end

end
