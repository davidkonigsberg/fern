# frozen_string_literal: true

require_relative "test_helper"
require "fern_circular-references-advanced"

# Basic SeedApiClient tests
class TestSeedApiClient < Minitest::Test
  def test_function
    SeedApiClient::Client.new
  end
end
