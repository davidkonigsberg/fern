# frozen_string_literal: true

require_relative "test_helper"
require "fern_file-download"

# Basic SeedFileDownloadClient tests
class TestSeedFileDownloadClient < Minitest::Test
  def test_function
    SeedFileDownloadClient::Client.new
  end
end
