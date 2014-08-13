json.array!(@assignments) do |assignment|
  json.extract! assignment, :id, :title, :alt_title, :vimeo_url, :content, :due_date
  json.url assignment_url(assignment, format: :json)
end
